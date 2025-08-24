exports.handler = async (event) => {
  const data = JSON.parse(event.body);
  console.log("Form submission:", data);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Form submitted successfully!" }),
  };
};