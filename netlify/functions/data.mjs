import contacts from './contacts';

export default async function data(req, context) {
  const message = Netlify.env.get("MESSAGE") || "default message";
  
  return new Response(
    JSON.stringify({ contacts, message }), // JSON response body
    {
      headers: {
        "Content-Type": "application/json", // Set the response type
      },
      status: 200, // HTTP status code
    }
  );
}