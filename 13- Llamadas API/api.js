(async () => {


  //Una única llamada fetch
  // let response = await fetch(`https://opendata.aemet.es/opendata/api/valores/climatologicos/mensualesanuales/datos/anioini/2015/aniofin/2015/estacion/B228/?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjYXJsb3NzZWRhZ2FtYmluQGdtYWlsLmNvbSIsImp0aSI6ImM4ZjE2NDI0LTE3NjktNGNlNy1iMTNiLTVlY2FiMjY2NDc4MyIsImlzcyI6IkFFTUVUIiwiaWF0IjoxNzExNTM0OTcxLCJ1c2VySWQiOiJjOGYxNjQyNC0xNzY5LTRjZTctYjEzYi01ZWNhYjI2NjQ3ODMiLCJyb2xlIjoiIn0.7c6cvyENJzVhTe2RJ2ZKZSyqxfC2IgK6xF3yJi4Zrxs`)
  // let result = await response.json()

  // response = await fetch(result.datos)
  // result = await response.json()


  //Multiples llamadas fetch secuenciales

  // const fs = require('fs')

  // try {
  //   const data = []

  //   for(let i = 2015; i < 2024; i++) {
  
  //     console.log('fetching data for year', i)
  //     let response = await fetch(`https://opendata.aemet.es/opendata/api/valores/climatologicos/mensualesanuales/datos/anioini/${i.toString()}/aniofin/${i.toString()}/estacion/B228/?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjYXJsb3NzZWRhZ2FtYmluQGdtYWlsLmNvbSIsImp0aSI6ImM4ZjE2NDI0LTE3NjktNGNlNy1iMTNiLTVlY2FiMjY2NDc4MyIsImlzcyI6IkFFTUVUIiwiaWF0IjoxNzExNTM0OTcxLCJ1c2VySWQiOiJjOGYxNjQyNC0xNzY5LTRjZTctYjEzYi01ZWNhYjI2NjQ3ODMiLCJyb2xlIjoiIn0.7c6cvyENJzVhTe2RJ2ZKZSyqxfC2IgK6xF3yJi4Zrxs`)
  //     let result = await response.json()
  
  //     response = await fetch(result.datos)
  //     result = await response.json()
  
  //     const yearData = result.map(data => (
  //       {
  //         mes: data.fecha,
  //         min: data.tm_min, 
  //         max: data.tm_max,
  //         media: data.tm_mes
  //       }
  //     ))
  
  //     data.push({
  //       year: i,
  //       data: yearData
  //     })
  //   }

  //   fs.writeFileSync('aemet.json', JSON.stringify(data, null, 2))

  // }catch(error){
  //   console.log(error)
  // }

  // Multiples llamadas con Promise.All

  // const promises = []

  // for (let i = 2015; i < 2024; i++) {
  //   promises.push((async () => {
  //     console.log('fetching data for year', i)

  //     let response = await fetch(
  //       `https://opendata.aemet.es/opendata/api/valores/climatologicos/mensualesanuales/datos/anioini/${i}/aniofin/${i}/estacion/B228/?api_key=${apiKey}`
  //     )

  //     let result = await response.json()

  //     response = await fetch(result.datos)
  //     result = await response.json()

  //     return {
  //       year: i,
  //       data: result.map(item => ({
  //         mes: item.fecha,
  //         min: item.tm_min,
  //         max: item.tm_max,
  //         media: item.tm_mes
  //       }))
  //     }
  //   })())
  // }

  // const data = await Promise.all(promises)

  // O escrito de manera más profesional
  // const data = await Promise.all(
  //   Array.from({ length: 2024 - 2015 }, async (_, index) => {
  //     const year = 2015 + index

  //     console.log('fetching data for year', year)

  //     let response = await fetch(
  //       `https://opendata.aemet.es/opendata/api/valores/climatologicos/mensualesanuales/datos/anioini/${year}/aniofin/${year}/estacion/B228/?api_key=${apiKey}`
  //     )

  //     let result = await response.json()

  //     response = await fetch(result.datos)
  //     result = await response.json()

  //     return {
  //       year,
  //       data: result.map(item => ({
  //         mes: item.fecha,
  //         min: item.tm_min,
  //         max: item.tm_max,
  //         media: item.tm_mes
  //       }))
  //     }
  //   })
  // )


  
})()