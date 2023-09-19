const Footer = () => {
  return (
    <footer className="mt-56">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12 infofifty">
            <p className="block fifty">
              FIFTY-8 <br />
              <span className="text-sm info">info@fifty8.io</span>
            </p>
          </div>

          <div className="flex items-center gap-1">
            <div className="sm:flex sm:gap-4 zaloo">
              <p className="rounded-md px-5 py-2.5 text-white shadow">
                <span className="zalo">[ZALO]</span>{' '}
                <span className="coming">[COMING SOON..]</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
