import { inngest } from "./client";
import { PERSONALIZED_WELCOME_EMAIL_PROMPT } from "./prompts";


export const sendSignupEmail = inngest.createFunction(
    {id:'sign-up-email'},
    {event:'app/user.created'},
    async ({event,step})=>{
        const userProfile = `
        - Country:${event.data.country}
        - Investment Goals:${event.data.investmentGoals}
        - Risk Tolerance:${event.data.riskTolerance}
        - Preferred Industry:${event.data.investmentGoals}

        `

        const prompt =PERSONALIZED_WELCOME_EMAIL_PROMPT.replace('{{userProfile}}',userProfile)

        const response = await step.ai.infer("generate-welcome-intro",{
            model:step.ai.models.gemini({model:'gemini-2.5-flash-lite'}),
            body:{
                    contents:[
                        {
                            role:'user',
                            parts:[
                                {
                                    text:prompt 
                                }
                            ]
                        }
                    ]
                }
            
        })

        await step.run('send-welcome-email', async ()=>{
            const part = response.candidates?.[0]?.content?.parts?.[0]
            
            const introText = (part && 'text' in part ? part.text : null) || "Thanks for joining BitwiseStocks. You now have the tools to track markets and make smarter decisions"
       
       //email sending logic
       
        })

        return {
            success: true,
            message: "Welcome Email sent successfully"
        }

    }
)