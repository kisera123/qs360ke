const database = require('../config/database');

function createInquiry(request, response) {
  const { name, email, message, projectType } = request.body;

  if (!name || !email || !message) {
    return response.status(400).json({ error: 'Name, email, and message are required.' });
  }

  const inquiry = {
    id: `inquiry-${Date.now()}`,
    name: name.trim(),
    email: email.trim().toLowerCase(),
    message: message.trim(),
    projectType: projectType ? projectType.trim() : null,
    createdAt: new Date().toISOString(),
  };

  database.inquiries.push(inquiry);
  return response.status(201).json({ message: 'Your inquiry has been received.', data: inquiry });
}

function subscribe(request, response) {
  const { email } = request.body;

  if (!email) return response.status(400).json({ error: 'Email is required.' });

  const normalizedEmail = email.trim().toLowerCase();
  const alreadySubscribed = database.subscribers.some((subscriber) => subscriber.email === normalizedEmail);
  if (alreadySubscribed) return response.status(409).json({ error: 'This email is already subscribed.' });

  const subscriber = { email: normalizedEmail, subscribedAt: new Date().toISOString() };
  database.subscribers.push(subscriber);
  return response.status(201).json({ message: 'You are on the list.', data: subscriber });
}

module.exports = { createInquiry, subscribe };
