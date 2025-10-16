function Title({
    children,
    center,
    className
}) {
  return (
    <>
      <h2 className={`font-semibold ${className} font-primary ${center ?? "text-center"} text-primaryk mb-6 md:mb-8 underline-offset-3 underline text-3xl md:text-4xl`}>
          { children }
      </h2>
    </>
  );
}

export default Title;