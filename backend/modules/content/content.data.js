const projects = [
  {
    id: 'westlands-workspaces',
    title: 'Westlands Workspaces',
    category: 'commercial',
    location: 'Nairobi',
    service: 'Cost management',
    area: '18,400 sqm',
    year: 2024,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'olive-grove-house',
    title: 'Olive Grove House',
    category: 'residential',
    location: 'Naivasha',
    service: 'Pre-contract services',
    area: 'Private client',
    year: 2023,
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'lakefront-commons',
    title: 'The Lakefront Commons',
    category: 'civic',
    location: 'Kisumu',
    service: 'Feasibility study',
    area: 'Public realm',
    year: 2022,
    image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'bahari-house',
    title: 'Bahari House',
    category: 'commercial',
    location: 'Mombasa',
    service: 'Final account',
    area: 'Adaptive reuse',
    year: 2021,
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=85',
  },
];

const journal = [
  {
    id: 'quiet-power-cost-plan',
    category: 'Perspective',
    readTime: 6,
    title: 'The quiet power of a good cost plan',
    summary: 'How a clear financial picture creates room for ambitious design.',
  },
  {
    id: 'designing-for-value',
    category: 'Field notes',
    readTime: 4,
    title: 'Designing for value without losing soul',
    summary: 'Value engineering can be a creative conversation, not a subtraction exercise.',
  },
  {
    id: 'fair-contracts',
    category: 'Contracts',
    readTime: 7,
    title: 'What makes a contract feel fair?',
    summary: 'Practical principles for contracts that support better working relationships.',
  },
];

const courses = [
  { id: 'cost-plan', number: '01', level: 'Foundation', title: 'Reading a construction cost plan', price: 39, duration: '4 hours' },
  { id: 'measurement', number: '02', level: 'Core skill', title: 'Measurement made clear', price: 59, duration: '6 hours' },
  { id: 'value-engineering', number: '03', level: 'Practice', title: 'Value engineering with care', price: 45, duration: '3 hours' },
  { id: 'project-reporting', number: '04', level: 'Leadership', title: 'Confident project reporting', price: 49, duration: '5 hours' },
];

const templates = [
  { id: 'early-cost-plan', title: 'Early cost plan', format: 'XLSX', price: 0, description: 'A clean elemental cost plan for early-stage decision making.' },
  { id: 'variation-tracker', title: 'Variation tracker', format: 'XLSX', price: 12, description: 'Keep changes visible, priced, and agreed before they become surprises.' },
  { id: 'site-meeting-agenda', title: 'Site meeting agenda', format: 'DOCX', price: 0, description: 'A focused agenda for meetings that end with owners and next steps.' },
  { id: 'cash-flow-forecast', title: 'Cash flow forecast', format: 'XLSX', price: 18, description: 'Map planned spend against progress and keep the conversation grounded.' },
];

const services = [
  { id: 'feasibility', number: '01', phase: 'Before', title: 'Feasibility & cost planning', description: 'Test the opportunity, set a grounded budget, and make the business case before design gathers momentum.' },
  { id: 'procurement', number: '02', phase: 'During', title: 'Procurement & tendering', description: 'Shape the right route to market, prepare clear documents, and help you appoint with confidence.' },
  { id: 'cost-control', number: '03', phase: 'Building', title: 'Cost control & reporting', description: 'Keep the budget live through change control, valuations, risk reviews, and useful monthly reporting.' },
  { id: 'final-accounts', number: '04', phase: 'Finishing', title: 'Final accounts', description: 'Close the books carefully, fairly, and with the lessons your next project deserves.' },
  { id: 'training', number: '05', phase: 'Teams', title: 'Training & workshops', description: 'Build commercial confidence in your team through practical sessions designed around real work.' },
  { id: 'independent-review', number: '06', phase: 'Special', title: 'Independent review', description: 'A second pair of eyes on budgets, claims, programmes, and the decisions that carry the most risk.' },
];

module.exports = { projects, journal, courses, templates, services };
