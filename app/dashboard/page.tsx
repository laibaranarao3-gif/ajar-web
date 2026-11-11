import Link from "next/link";

export default function DashboardPage() {
  const professors = ["Laiba", "Malaika", "Tayyaba", "Areeba"];

  return (
    <main>
      <h1>Admin Panel</h1>
      <h1>Admin Dashboard</h1>
      <p>Welcome Admin</p>

      {professors.map((prof) => (
        <Link key={prof} href={`/professor/${prof}`}>
          <p>Go To professor {prof}</p>
        </Link>
      ))}
    </main>
  );
}