const { OpenAI } = require('openai')
const { encode } = require('gpt-tokenizer')

(async () => {

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  })

  try {
    let result = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-1106",
      response_format: { type: "json_object" },
      messages: [
        {
          "role": "system",
          "content": ""
        },
        {
          "role": "user",
          "content": ``
        }
      ],
      temperature: 0.7,
      max_tokens: 2095,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
      
    response = JSON.parse(result.choices[0].message.content)

    console.log(response)
      
  } catch (e) {
    console.log(e)
  }
})()
