export default function Copyright() {
    let currentYear = new Date().getFullYear();
    return (
      <div className="text-center p-4 text-neutral-400">
        &copy; {currentYear} Copyright Rawnaq
      </div>
    );
  }