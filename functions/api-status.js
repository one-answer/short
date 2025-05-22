// Function to handle API status checks
export async function onRequestGet(context) {
  try {
    // Return a simple JSON response indicating the API is online
    return new Response(
      JSON.stringify({
        status: 'online',
        timestamp: new Date().toISOString()
      }),
      {
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache, no-store, must-revalidate',
        },
      }
    );
  } catch (error) {
    console.error('API status check error:', error);
    return new Response(
      JSON.stringify({
        status: 'offline',
        error: error.message
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache, no-store, must-revalidate',
        },
      }
    );
  }
}
