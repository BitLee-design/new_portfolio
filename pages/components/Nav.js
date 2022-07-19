
function Nav() {
  return
    <div className="fixed w-full h-20 shadow">
        <div className="flex items-center justify-between w-full h-full px-10 2xl:px-16">
<Image
          src="/../public/assets/bitlee-logo.png"
          alt="logo"
          width="135"
          height="100"
        />
        </div>
        <div>
          <ul style="className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase border-teal-200 hover:border-b">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase border-teal-200 hover:border-b">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase border-teal-200 hover:border-b">
                Skills
              </li>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase border-teal-200 hover:border-b">
                Projects
              </li>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase border-teal-200 hover:border-b">
                Contact
              </li>
            <Link href="/#main">
              <li className="ml-10 text-sm uppercase border-teal-200 hover:border-b">
                Main
              </li>
            />
        </div>
    </div>;
}
