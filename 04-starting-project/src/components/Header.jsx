import logo from '../assets/logo.png';
// import classes from "./Header.module.css"; // this means that this class "paragraph" will only be accessible and available in this file, in which it was imported and no where else. If we use the same class name in another file then that style will not be applied if we dont import this in that file.





export default function Header() {
  return (
    <header className="flex flex-col items-center mt-8 mb-8 md:mb-16">
      <img src={logo} alt="A canvas" className='mb-8 w-44 h-44 object-contain' />
      <h1 className='text-xl md:text-4xl font-semibold tracking-widest text-center uppercase text-amber-800 font-brand'>ReactArt</h1>
      {/* <p className={classes.paragraph}>A community of artists and art-lovers.</p> */}
      <p className='text-stone-500'>A community of artists and art-lovers.</p>
    </header>
  );
}
