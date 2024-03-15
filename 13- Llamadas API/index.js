(async () => {
  const fs = require('fs');
  const { OpenAI } = require('openai')
  const { encode } = require('gpt-tokenizer');

  const towns = ['mallorca', 'mallorquina', 'mallorquinista', 'mallorquins', 'alaro', 'alcudia', 'algaida', 'andratx', 'ariany', 'arta', 'banyalbufar', 'binissalem', 'biniali - sancelles',
  'buger', 'bunyola', 'caimari', 'cala millor', 'cala ratjada', 'calvia', 'campanet', 'can pastilla', "ca'n pastilla", 'campos', 'cas capelles - marratxi', 'can picafort', "ca'n picafort", 'capdepera', 'coll den rebassa', 'colonia sant jordi',  'colonia de sant jordi', 
  'consell', 'costitx', 'deia', 'deya', 'el arenal','escorca', 'es pil·lari', 'esporles', 'establiments', 'estellencs', 'es jonquet', 'felanitx', 'fornalutx', 'genova', 'inca', 'la cabaneta - marratxi', 'lloret de vistalegre', 'lloseta',
  'llubi', 'llucmajor', 'magalluf', 'manacor', 'mancor de la vall', 'maria de la salut', 'marivent', 'marratxi', 'montuiri',
  'muro', 'palma', 'palma de mallorca', 'palmesana', 'palma nova', 'palmanova', 'playa de palma', 'petra', 'pla de na tesa', 'porto pi', 'porto-pi', 'poligono de levante', 'pollenca', 'pollensa', "pont d'inca", 'porreres', 'porto cristo', 'portopetro', 'puerto de soller', 'port de pollenca',
  'porto petro', 'puigpunyent', "s'arraco", "s'arenal", "s'aranjassa", 'sa pobla', 'sa cabaneta', 'san telmo', 'santelm', 'sant joan', 'sant llorenc des cardassar',
  'santa eugenia', 'san jordi', 'sant jordi', 'santa margalida', 'santa maria del cami', 'santa maria', 'santanyi', 'santa ponca', 'santa ponsa', 'secar de la real', 'selva', 'sencelles', 'ses salines', "s'illot", 'sineu', 'soller', 'son ferriol', 'son rullan', 'son serra de marina',
  'son ferrer', 'son sardina', 'son servera', 'urb. bahia grande', 'valldemossa', 'valldemosa', 'vilafranca de bonany']

  if (!fs.existsSync('openAIresponse.json')) {
    const response = await fetch('https://catalegdades.caib.cat/api/views/t84h-sihg/rows.json?accessType=DOWNLOAD');
    const associations = await response.json();

    let transformedData = associations.data.map(([
      sid, 
      id, 
      position, 
      created_at, 
      created_meta, 
      updated_at, 
      updated_meta, 
      meta, 
      nif, 
      registerNumber, 
      registerDate, 
      name, 
      address, 
      town, 
      goals, 
      scope
    ]) => {
      return {name, goals, registerDate, town, address, scope};
    });

    // console.log(transformedData.length);

    let tenYearsAgo = new Date();
    tenYearsAgo.setFullYear(tenYearsAgo.getFullYear() - 10);

    let { filteredData, discardedData } = transformedData.reduce((acc, association) => {
      if (association.town && towns.includes(association.town.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()) && new Date(association.registerDate) > tenYearsAgo) {
        acc.filteredData.push(association);
      } else {
        if (towns.some(town => association.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(town)) && new Date(association.registerDate) > tenYearsAgo) {
          acc.filteredData.push(association);
        } else {
          acc.discardedData.push(association);
        }
      }
      return acc;
    }, { filteredData: [], discardedData: [] });

    // console.log(filteredData.length);
    // console.log(discardedData.length);
    // fs.writeFileSync('associations.json', JSON.stringify(filteredData, null, 2));
    // fs.writeFileSync('descarded.json', JSON.stringify(discardedData, null, 2));

    const reducedData = filteredData.map(association => {
      return {
        name: association.name,
        goals: association.goals
      }
    })

    let chunks = [];
    let chunkSize = Math.ceil(reducedData.length / 120);

    for (let i = 0; i < reducedData.length; i += chunkSize) {
      let chunk = reducedData.slice(i, i + chunkSize);  
      // console.log(encode(JSON.stringify(chunk, null, 2)).length);  
      chunks.push(chunk);
    }

    const openai = new OpenAI({
      apiKey: ''
    })

    try {
      let promises = chunks.map((chunk, i) => {
        const reducedDataString = JSON.stringify(chunk, null, 2);

        return openai.chat.completions.create({
          model: "gpt-3.5-turbo-1106",
          response_format: { type: "json_object" },
          messages: [
            {
              "role": "system",
              "content": "Vas a filtrar la información que se te de en forma de json y vas a devolver únicamente un json, no añadas texto extra ya que tu respuesta deberá convertirse luego a objeto. Devuelve el resultado con una estructura como esta {'associations': [{'name': 'nombre', 'goals': 'objetivos'}]}."
            },
            {
              "role": "user",
              "content": `Quiero realizar un festival donde quiero invitar a asociaciones cuyo nombre u objetivos tengan que ver con la temática del festival. En el festival se darán charlas sobre educación, gestión emocional y se realizarán talleres de expresión artística como pintura, música, danza, etc. Analiza los siguientes datos y filtra aquellas asociaciones que se ajustan a la temática del festival. Aquí tienes los datos: ${reducedDataString}`
            }
          ],
          temperature: 0.7,
          max_tokens: 2095,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
        });
      });

      let results = await Promise.all(promises);
      let openAIAssociations = [];

      for (let i = 0; i < results.length; i++) {        
        let object = JSON.parse(results[i].choices[0].message.content);

        object.associations.forEach(association => {
          openAIAssociations.push(association);
        })
      }

      const targetData = filteredData.filter(association => openAIAssociations.some(openAIAssociation => openAIAssociation.name === association.name));

      fs.writeFileSync('openAIresponse.json', JSON.stringify(targetData, null, 2));
    } catch (e) {
      console.log(e);
    }
  }else{
    const targetData  = JSON.parse(fs.readFileSync('openAIresponse.json', 'utf-8'));

    for (let association of targetData) {
      if(association.address){
        const street = association.address.replace(/ /g, '+')

        const geoposition = await fetch(`https://ideib.caib.es/geoserveis/rest/services/public/GOIB_Adreces_IB/GeocodeServer/findAddressCandidates?SingleKey=&Single+Line+Input=${street}&f=pjson`)
        const geopositionData = await geoposition.json();

        if(geopositionData.candidates.length > 0){
          const localation = geopositionData.candidates[0].location;
        }else{
          console.log('No se ha encontrado la dirección: ' + street);
        }
      }
    }

    // const geoposition = await fetch('https://ideib.caib.es/geoserveis/rest/services/public/GOIB_Adreces_IB/GeocodeServer/findAddressCandidates?SingleKey=&Single+Line+Input=Ramon+Berenguer+III&f=pjson')
    // const geopositionData = await geoposition.json();
    // const localation = geopositionData.candidates[0].location;

    // const utmProjection = '+proj=utm +zone=31N +datum=WGS84 +units=m +no_defs';
    // const latLongProjection = '+proj=longlat +datum=WGS84 +no_defs';
    
    // const x = localation.x
    // const y = localation.y
    
    // const [longitude, latitude] = proj4(utmProjection, latLongProjection, [x, y]);

    // console.log(latitude , longitude);
  }
})();
