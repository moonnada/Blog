import React from 'react'
import { Button, Grid,TextField, Typography } from '@material-ui/core'
import './contact.css'

export default function Contact() {

    return (
        <>
            
            

        {/* Contact */}
        <Grid container spacing={4} className="section pt_45 pb_45">
        

            {/*contack form  */}
            
            <Grid item xs={12} lg={7} >
                <Grid container>
               

                    <Grid item xs={6} className="box">
                            <Grid container spacing={3}>
                                <Grid item xs={6} sm={6}>
                                    <TextField fullWidth name='name' label="Name" />
                                </Grid>
                                <Grid item xs={6} sm={6}>
                                    <TextField fullWidth name='email' label="Email" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth name='message' label="Message" multiline rows={4}/>
                                </Grid>
                                <Grid item xs={12}>
                                <Button style={{ backgroundColor : "#F3EFCC"}} type="submit" className="custom_btn sbBtn" value="Send Message">Submit</Button>
                                </Grid>
                            </Grid>
                        </Grid> 
                    
                    </Grid>                     
                </Grid>
                

                
                    

                </Grid>
                
    
        </>
    )
}
