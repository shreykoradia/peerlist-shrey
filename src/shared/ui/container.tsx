const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="mx-auto flex flex-col justify-center border-y-0 border-x border-x-secondary-foreground max-w-screen-sm h-full">
      {children}
    </div>
  );
};

export default Container;
