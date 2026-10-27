export function Footer() {
  return (
    <footer className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[90%] rounded-t-lg bg-primary flex justify-between items-center py-3 px-5 text-white">
      <span>B Cupen</span>
      <ul className="flex items-center gap-3">
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Projects</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </ul>
    </footer>
  );
}
