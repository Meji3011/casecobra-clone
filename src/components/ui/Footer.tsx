import Link from "next/link";
import MaxWidthWrapper from "../MaxWidthWrapper";

const Footer = () => {
  return (
    <footer className="relative bg-white h-20">
      <MaxWidthWrapper>
        <div className="border-t border-gray-200"></div>
        <div className="h-full flex flex-col md:flex-row md:justify-between justify-center items-center">
          <div className="text-center md:text-left pb-2 md:pb-0">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} All rights reserves
            </p>
          </div>

          {/* These should be links but we are not actually going to use this website for business so these are disabled. */}
          <div className="flex items-center justify-center">
            <div className="flex space-x-8">
              <div className="cursor-not-allowed text-sm text-muted-foreground hover:text-gray-600">
                Terms
              </div>
              <div className="cursor-not-allowed text-sm text-muted-foreground hover:text-gray-600">
                Privacy Policy
              </div>
              <div className="cursor-not-allowed text-sm text-muted-foreground hover:text-gray-600">
                Cookie Policy
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;