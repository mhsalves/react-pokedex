const isDevelopment = process.env.NODE_ENV === 'development';

const getStatic = (path) => {
  return (!isDevelopment) ? `https://mhsalves.github.io/react-pokedex${path}` : path;
}

export default getStatic;