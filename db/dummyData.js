const data = {
  volunteers: [
    {
      name: "John Doe",
      contact: 1234567890,
      isAvailable: true,
      skills: ["Leadership", "Communication"],
      interests: ["Health", "Community development"],
      events: []
    },
    {
      name: "Jane Smith",
      contact: 9876543210,
      isAvailable: true,
      skills: ["Teamwork", "Fundraising"],
      interests: ["Animal shelter", "Conservation"],
      events: []
    },
    {
      name: "Alice Johnson",
      contact: 5556667777,
      isAvailable: false,
      skills: ["Teamwork", "Compassion"],
      interests: ["Counseling psychology", "Health"],
      events: []
    },
    {
      name: "Bob Brown",
      contact: 8887778888,
      isAvailable: true,
      skills: ["Communication", "Leadership"],
      interests: ["Community development", "Health"],
      events: []
    },
    {
      name: "Eva White",
      contact: 4443332222,
      isAvailable: false,
      skills: ["Fundraising", "Teamwork"],
      interests: ["Animal shelter", "Conservation"],
      events: []
    },
    {
      name: "David Lee",
      contact: 1112223333,
      isAvailable: true,
      skills: ["Leadership", "Teamwork"],
      interests: ["Health", "Community development"],
      events: []
    },
    {
      name: "Grace Turner",
      contact: 6665554444,
      isAvailable: true,
      skills: ["Communication", "Fundraising"],
      interests: ["Health", "Counseling psychology"],
      events: []
    },
    {
      name: "Frank Adams",
      contact: 9998887777,
      isAvailable: true,
      skills: ["Leadership", "Communication"],
      interests: ["Animal shelter", "Community development"],
      events: []
    },
    {
      name: "Linda Martin",
      contact: 2221110000,
      isAvailable: false,
      skills: ["Teamwork", "Compassion"],
      interests: ["Health", "Conservation"],
      events: []
    },
    {
      name: "Henry Wilson",
      contact: 7776665555,
      isAvailable: true,
      skills: ["Teamwork", "Fundraising"],
      interests: ["Animal shelter", "Conservation"],
      events: []
    },
    {
      name: "Olivia Harris",
      contact: 3334445555,
      isAvailable: true,
      skills: ["Leadership", "Communication"],
      interests: ["Community development", "Counseling psychology"],
      events: []
    },
    {
      name: "Samuel Moore",
      contact: 5554443333,
      isAvailable: false,
      skills: ["Communication", "Leadership"],
      interests: ["Health", "Animal shelter"],
      events: []
    },
    {
      name: "Sophia Clark",
      contact: 6667778888,
      isAvailable: true,
      skills: ["Fundraising", "Teamwork"],
      interests: ["Conservation", "Health"],
      events: []
    },
    {
      name: "Thomas Parker",
      contact: 1112223333,
      isAvailable: true,
      skills: ["Leadership", "Teamwork"],
      interests: ["Community development", "Health"],
      events: []
    },
    {
      name: "Emily Turner",
      contact: 4443332222,
      isAvailable: true,
      skills: ["Communication", "Fundraising"],
      interests: ["Animal shelter", "Counseling psychology"],
      events: []
    },
    {
      name: "William Davis",
      contact: 2221110000,
      isAvailable: false,
      skills: ["Teamwork", "Compassion"],
      interests: ["Health", "Conservation"],
      events: []
    },
    {
      name: "Ava Hall",
      contact: 8887778888,
      isAvailable: true,
      skills: ["Teamwork", "Fundraising"],
      interests: ["Community development", "Animal shelter"],
      events: []
    },
    {
      name: "James Bennett",
      contact: 1234567890,
      isAvailable: true,
      skills: ["Leadership", "Communication"],
      interests: ["Health", "Conservation"],
      events: []
    },
    {
      name: "Mia Garcia",
      contact: 5556667777,
      isAvailable: false,
      skills: ["Leadership", "Compassion"],
      interests: ["Counseling psychology", "Community development"],
      events: []
    },
    {
      name: "Liam Scott",
      contact: 9876543210,
      isAvailable: true,
      skills: ["Communication", "Teamwork"],
      interests: ["Animal shelter", "Health"],
      events: []
    }
  ],
  events: [
    {
      name: "Summer Music Festival",
      description: "An annual music festival featuring top artists from around the world.",
      location: {
        venue: "City Park",
        address: {
          street: "123 Festival Lane",
          city: "New York",
          state: "NY",
          country: "USA"
        }
      },
      date: {
        day: 15,
        month: "July",
        year: 2023
      },
      roles: [
        {
          role: "Security",
          requiredVolunteers: 20
        },
        {
          role: "Ticket Sales",
          requiredVolunteers: 10
        }
      ],
    },
    {
      name: "Community Cleanup Day",
      description: "Join us in cleaning up our local community to make it a better place.",
      location: {
        venue: "Community Center",
        address: {
          street: "456 Clean Street",
          city: "Los Angeles",
          state: "CA",
          country: "USA"
        }
      },
      date: {
        day: 5,
        month: "April",
        year: 2023
      },
      roles: [
        {
          role: "Volunteer Coordinator",
          requiredVolunteers: 2
        },
        {
          role: "Cleaner",
          requiredVolunteers: 50
        }
      ]
    },
    {
      name: "Tech Conference",
      description: "A conference on the latest technology trends and innovations.",
      location: {
        venue: "Tech Convention Center",
        address: {
          street: "789 Innovation Avenue",
          city: "San Francisco",
          state: "CA",
          country: "USA"
        }
      },
      date: {
        day: 20,
        month: "October",
        year: 2023
      },
      roles: [
        {
          role: "Speaker",
          requiredVolunteers: 5
        },
        {
          role: "Registration Staff",
          requiredVolunteers: 15
        }
      ]
    },
    {
      name: "Food Drive",
      description: "Help us collect food donations for those in need in our community.",
      location: {
        venue: "Community Center",
        address: {
          street: "123 Charity Road",
          city: "Chicago",
          state: "IL",
          country: "USA"
        }
      },
      date: {
        day: 10,
        month: "November",
        year: 2023
      },
      roles: [
        {
          role: "Food Collector",
          requiredVolunteers: 30
        }
      ]
    },
    {
      name: "Art Exhibition",
      description: "A showcase of local and international art pieces.",
      location: {
        venue: "Art Gallery",
        address: {
          street: "567 Art Street",
          city: "London",
          state: "England",
          country: "UK"
        }
      },
      date: {
        day: 8,
        month: "June",
        year: 2023
      },
      roles: [
        {
          role: "Gallery Guide",
          requiredVolunteers: 12
        }
      ]
    },
    {
      name: "Science Fair",
      description: "Students present their science projects to the public and judges.",
      location: {
        venue: "Science Center",
        address: {
          street: "321 Discovery Boulevard",
          city: "Toronto",
          state: "Ontario",
          country: "Canada"
        }
      },
      date: {
        day: 25,
        month: "March",
        year: 2023
      },
      roles: [
        {
          role: "Judge",
          requiredVolunteers: 10
        },
        {
          role: "Assistant",
          requiredVolunteers: 25
        }
      ]
    },
    {
      name: "Charity Run",
      description: "A charity run to raise funds for a good cause.",
      location: {
        venue: "City Park",
        address: {
          street: "789 Runners Road",
          city: "Sydney",
          state: "NSW",
          country: "Australia"
        }
      },
      date: {
        day: 7,
        month: "September",
        year: 2023
      },
      roles: [
        {
          role: "Race Organizer",
          requiredVolunteers: 5
        },
        {
          role: "Water Station Attendant",
          requiredVolunteers: 15
        }
      ]
    },
    {
      name: "Movie Night",
      description: "An outdoor movie night under the stars for the whole family.",
      location: {
        venue: "Park Amphitheater",
        address: {
          street: "234 Movie Lane",
          city: "Los Angeles",
          state: "CA",
          country: "USA"
        }
      },
      date: {
        day: 12,
        month: "August",
        year: 2023
      },
      roles: [
        {
          role: "Host",
          requiredVolunteers: 2
        },
        {
          role: "Management Person",
          requiredVolunteers: 8
        }
      ]
    }
  ],
};

const seedData = (addNew, type) => {
  if (type === "volunteers") {
    // allot eventId to volunteers
    data.volunteers.forEach((volunteer) => addNew(volunteer));
  } else if (type === "events") {
    data.events.forEach((event) => addNew(event));
  }
  console.log("Seeded...");
}

module.exports = seedData;