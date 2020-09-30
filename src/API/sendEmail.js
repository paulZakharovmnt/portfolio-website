import emailjs from "emailjs-com";

const api = {
  serviceKey: "service_94o55y5",
  templateKey: "template_32cv8j7",
  userId: "user_Pwkw1d1v5RMpraOj0or8j",
};

const sendEmail = async (userName, userEmail, userMessage) => {
  const messageFromUser = {
    from_name: userName,
    from_email: userEmail,
    message: userMessage,
  };

  return await emailjs.send(
    api.serviceKey,
    api.templateKey,
    messageFromUser,
    api.userId
  );
};

export default sendEmail;
