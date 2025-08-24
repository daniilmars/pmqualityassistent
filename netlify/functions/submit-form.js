const fetch = require('node-fetch');

exports.handler = async (event) => {
  const data = JSON.parse(event.body);

  try {
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data).toString(),
    });

    if (response.ok) {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Form submitted successfully!' }),
      };
    } else {
      console.error('Error submitting form to Netlify:', response.status, response.statusText);
      const text = await response.text();
      console.error('Response body:', text);
      return {
        statusCode: response.status,
        body: JSON.stringify({ message: 'Error submitting form to Netlify' }),
      };
    }
  } catch (error) {
    console.error('Error submitting form to Netlify:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error submitting form to Netlify' }),
    };
  }
};