export default function LeftNav() {
  return (
    <nav className="left-nav bg-gray-800 text-white p-4">
      <h2 className="text-xl font-semibold mb-4">Navigation</h2>
      <ul className="space-y-2">
        <li>My Calender</li>
        <li>Leads</li>
        <li>
          <ul>
            Hr
            <li>Leaves</li>
            <li>Attendance</li>
            <li>Appreciation</li>
          </ul>
        </li>
        <li>
          <ul>
            Work
            <li>Project</li>
            <li>Task</li>
            <li>Team</li>
          </ul>
        </li>
        <li>Tickets</li>
        <li>Messages</li>
        <li>Notice Board</li>
        <li>Settings</li>
      </ul>
    </nav>
  );
}
