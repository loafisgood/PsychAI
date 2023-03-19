const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config();
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');


const configuration = new Configuration({
    organization: "org-DHzhd6WVMSOFpTaltod5SWAv",
    apiKey: process.env.API_KEY,
});
const openai = new OpenAIApi(configuration);

const app = express();

app.use(bodyparser.json());
app.use(cors());

const port = 8080;

app.post('/', async (req, res) => { 
    const message = req.body.message
    let prompt = `Helpful Comforting therapist that helps people with their struggles. 
    This therapist will respond to the following user's prompt with helpful and friendly ways on how to resolve the issue and 
    Try to provide ways that can help with the users' problems. \n${message} \nAI:`
    //let prompt = `Drunk Aggressive Right wing old World war 2 veteran. Respond to the following conversation with sarcastic, passive aggressive, and mean answers. \n${message} \nAI:`
    /*res.json({
        message: "Who cares",
        return
    })
    */
    try {
        const response = await openai.createCompletion({
            model: "text-curie-001",
            prompt: prompt,
            max_tokens: 100,
            temperature: 0.9,
        });
        res.json({
            message: response.data.choices[0].text,
        })
    } catch (error) {
        console.error(error)
        res.json({
            message: "Sorry, my connection timed out. Please try again later.",
        })
    }
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
    }
);