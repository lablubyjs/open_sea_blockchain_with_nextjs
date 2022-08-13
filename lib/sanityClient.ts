import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'dtkxmkat',
  dataset: 'production',
  apiVersion: '2022-08-13',
  token:
    'skUGKJBxfh36yD2uwrA0Bp5Y6lI5FDpNMjy6oXMbWGkCyDfUu50ExX6cPWOaNCjFSibGpR6GdUFbn1Pvr6HJFHNFe4JOvFHyon0V4lVJcjAgXL2veYnWETyAno9yyqkZmmAsfYfv3BeTskYgYCswYjaO1p5b0fHq2l8DaZe9YlN6nYEGj81h',
  useCdn: false,
});
