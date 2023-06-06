import Profile from "./Profile";

export default function AppHeader() {
  return (
    <header className="h-12 border-b border-gray flex justify-end items-center px-4 md:px-8 lg:px-16">
      <div>
        <Profile />
      </div>
    </header>
  );
}
