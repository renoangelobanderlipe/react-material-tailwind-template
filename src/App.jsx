import React from 'react';
import { Button, Typography } from '@material-tailwind/react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import template from './assets/json/template.json'

const App = () => {
  const githubRepoUrl = 'https://github.com/renoangelobanderlipe/material-tailwind-react-template';
  const issueUrl = `${githubRepoUrl}/issues`;
  return (
    <div className="flex justify-center items-center flex-col h-screen gap-8">
      <div className='w-[500px]'>
        <Lottie animationData={template} loop={true} />
      </div>
      <Typography color="indigo" variant="h3" className="mb-4">
        Welcome to the React Material Tailwind Template
      </Typography>

      <Typography color="gray" variant="body1" className="text-center max-w-prose">
        Kickstart your project with this free React template. Crafted with love using Material-Tailwind and Tailwind CSS, it provides a solid foundation for building beautiful and responsive web applications.
      </Typography>

      <div className="flex gap-4">
        <Link to={githubRepoUrl} target="_blank">
          <Button color="indigo" ripple="light" className="flex items-center gap-2">
            <Icon icon="akar-icons:github-fill" width={'24px'} className="text-white" />
            <Typography color="white" fontWeight="bold">
              Explore on GitHub
            </Typography>
          </Button>
        </Link>

        <Link to={issueUrl} target="_blank">
          <Button color="red" ripple="light" className="flex items-center gap-2">
            <Icon icon="bi:exclamation-triangle-fill" width={'24px'} className="text-white" />
            <Typography color="white" fontWeight="bold">
              Report an Issue
            </Typography>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default App;
