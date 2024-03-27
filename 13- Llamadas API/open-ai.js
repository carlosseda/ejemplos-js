(async () => {
  require('dotenv').config()
  const { OpenAI } = require('openai')
  const { encode } = require('gpt-tokenizer')
  const fs = require('fs')

  const openai = new OpenAI({
    apiKey: process.env.OpenAI_API_KEY,
  })

  try {
    let result = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      response_format: { type: "json_object" },
      messages: [
        {
          "role": "system",
          "content": "Eres un detector de nombres de autores, analiza el texto y extrae solo los nombres de aquellos que hayan hablado del COVID-19. Genera un json como este:" +
          "{authors: []}"
        },
        {
          "role": "user",
          "content": text
        }
      ],
      temperature: 0.7,
      max_tokens: 2095,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
      
    const response = JSON.parse(result.choices[0].message.content)
    fs.writeFileSync('openai.json', JSON.stringify(response, null, 2))      
  } catch (e) {
    console.log(e)
  }
})()
