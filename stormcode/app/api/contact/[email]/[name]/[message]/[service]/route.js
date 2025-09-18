import sendContactEmail from "../../../../../../mailgun/sendContactEmail"
export async function POST(req, params) {
  const contact = { ...params.params }

  try {
    await sendContactEmail(contact)
    console.log('Email sent successfully')
    return new Response(
      JSON.stringify({
        success: 'success',
        message: 'Request received',
        status: 200,
        statusText: 'Your request has been received',
      })
    )
  } catch (error) {
    console.log('ERROR sending contact EMAIL', error)
    return new Response(
      JSON.stringify({
        success: 'failed',
        message: 'Request received',
        status: 500,
        statusText: 'There was an error',
      })
    )
  }
}
