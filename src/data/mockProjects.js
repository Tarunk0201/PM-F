const mockProjects = [
  {
    id: 1,
    name: "Project Alpha",
    status: "In Progress",
    priority: "High",
    description: "Developing the core structure of the Alpha project.",
    users: [
      { id: 1, name: "Monu Parmar", avatar: "https://randomuser.me/api/portraits/women/10.jpg" },
      { id: 2, name: "Amit Sharma", avatar: "https://randomuser.me/api/portraits/men/11.jpg" },
      { id: 3, name: "Priya Verma", avatar: "https://randomuser.me/api/portraits/women/12.jpg" },
      { id: 4, name: "Deepak Joshi", avatar: "https://randomuser.me/api/portraits/men/13.jpg" },
      { id: 5, name: "Neha Yadav", avatar: "https://randomuser.me/api/portraits/women/14.jpg" }
    ],
    tasks: [
      { name: "Setup repository", user: "Monu Parmar", dueDate: "2025-05-30", status: "Completed" },
      { name: "Design UI mockups", user: "Amit Sharma", dueDate: "2025-06-05", status: "Pending" },
      { name: "Implement authentication", user: "Priya Verma", dueDate: "2025-06-10", status: "In Progress" },
      { name: "Backend API setup", user: "Deepak Joshi", dueDate: "2025-06-12", status: "Pending" },
      { name: "Write unit tests", user: "Neha Yadav", dueDate: "2025-06-15", status: "Pending" }
    ]
  },
  {
    id: 2,
    name: "Project Beta",
    status: "Completed",
    priority: "Low",
    description: "Finalized and delivered to the client.",
    users: [
      { id: 6, name: "Ravi Singh", avatar: "https://randomuser.me/api/portraits/men/15.jpg" },
      { id: 7, name: "Sneha Patel", avatar: "https://randomuser.me/api/portraits/women/16.jpg" }
    ],
    tasks: [
      { name: "Final testing", user: "Ravi Singh", dueDate: "2025-04-20", status: "Completed" },
      { name: "Client feedback review", user: "Sneha Patel", dueDate: "2025-04-22", status: "Completed" },
      { name: "Deployment", user: "Ravi Singh", dueDate: "2025-04-25", status: "Completed" }
    ]
  },
  {
    id: 3,
    name: "Project Gamma",
    status: "Pending",
    priority: "Medium",
    description: "Initial requirements and analysis phase.",
    users: [
      { id: 8, name: "Alok Mehta", avatar: "https://randomuser.me/api/portraits/men/17.jpg" },
      { id: 9, name: "Kiran Das", avatar: "https://randomuser.me/api/portraits/men/18.jpg" },
      { id: 10, name: "Nidhi Agarwal", avatar: "https://randomuser.me/api/portraits/women/19.jpg" },
      { id: 11, name: "Tarun Bansal", avatar: "https://randomuser.me/api/portraits/men/20.jpg" }
    ],
    tasks: [
      { name: "Gather requirements", user: "Alok Mehta", dueDate: "2025-06-01", status: "Pending" },
      { name: "Create analysis document", user: "Kiran Das", dueDate: "2025-06-05", status: "Pending" },
      { name: "Stakeholder meeting", user: "Nidhi Agarwal", dueDate: "2025-06-07", status: "Pending" },
      { name: "Prepare project plan", user: "Tarun Bansal", dueDate: "2025-06-10", status: "Pending" }
    ]
  },
  {
    id: 4,
    name: "Project Delta",
    status: "In Progress",
    priority: "High",
    description: "User testing and feedback collection.",
    users: [
      { id: 12, name: "Meera Kumari", avatar: "https://randomuser.me/api/portraits/women/21.jpg" },
      { id: 13, name: "Vivek Sinha", avatar: "https://randomuser.me/api/portraits/men/22.jpg" },
      { id: 14, name: "Asha Rani", avatar: "https://randomuser.me/api/portraits/women/23.jpg" },
      { id: 15, name: "Sanjay Kapoor", avatar: "https://randomuser.me/api/portraits/men/24.jpg" },
      { id: 16, name: "Divya Jain", avatar: "https://randomuser.me/api/portraits/women/25.jpg" }
    ],
    tasks: [
      { name: "Prepare test cases", user: "Meera Kumari", dueDate: "2025-06-15", status: "In Progress" },
      { name: "Conduct user testing", user: "Vivek Sinha", dueDate: "2025-06-20", status: "Pending" },
      { name: "Analyze feedback", user: "Asha Rani", dueDate: "2025-06-25", status: "Pending" },
      { name: "Update documentation", user: "Sanjay Kapoor", dueDate: "2025-06-28", status: "Pending" },
      { name: "Plan next release", user: "Divya Jain", dueDate: "2025-07-01", status: "Pending" }
    ]
  }
];

export default mockProjects;
