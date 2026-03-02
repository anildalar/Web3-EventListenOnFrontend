

export async function POST(req:any) {
  const body = await req.json()
  console.log(body)
  return Response.json({ received: true })
}


