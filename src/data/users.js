// Mock user data used by the Users list and User Detail pages.
// The first two entries match the assignment brief; the rest were added
// (with a few extra fields) so the detail page has more to show.
const users = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Frontend Developer',
    company: 'Acme Corp',
    phone: '+1 555 010 1001',
    city: 'New York, USA',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'UX Designer',
    company: 'Pixel Studio',
    phone: '+1 555 010 1002',
    city: 'San Francisco, USA',
  },
  {
    id: 3,
    name: 'Arjun Menon',
    email: 'arjun@example.com',
    role: 'Backend Engineer',
    company: 'CloudNine Labs',
    phone: '+91 90000 10003',
    city: 'Kochi, India',
  },
  {
    id: 4,
    name: 'Priya Nair',
    email: 'priya@example.com',
    role: 'Product Manager',
    company: 'Brightline',
    phone: '+91 90000 10004',
    city: 'Bengaluru, India',
  },
  {
    id: 5,
    name: 'Michael Brown',
    email: 'michael@example.com',
    role: 'DevOps Engineer',
    company: 'Stackwise',
    phone: '+44 20 7946 0005',
    city: 'London, UK',
  },
  {
    id: 6,
    name: 'Sara Ali',
    email: 'sara@example.com',
    role: 'QA Analyst',
    company: 'Testify',
    phone: '+971 50 000 0006',
    city: 'Dubai, UAE',
  },
  {
    id: 7,
    name: 'David Lee',
    email: 'david@example.com',
    role: 'Data Scientist',
    company: 'Insightful AI',
    phone: '+65 6000 0007',
    city: 'Singapore',
  },
  {
    id: 8,
    name: 'Emily Clark',
    email: 'emily@example.com',
    role: 'Full Stack Developer',
    company: 'Northwind',
    phone: '+1 416 555 0008',
    city: 'Toronto, Canada',
  },
];

// Route params are strings, so compare against the id as a string.
// This also means values like "abc" or "3.0" simply match no user.
export function getUserById(id) {
  return users.find((user) => String(user.id) === id);
}

export default users;
