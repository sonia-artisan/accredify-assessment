import React from 'react';
import { useNavigation } from '../utils/navigateTo';
import '../styles/pages/SignInPage.scss';

import Container from '../components/Container';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import Button from '../components/Button';

const SignInPage = () => {
    const navigateTo = useNavigation();
    const handleLogin = () => {
        navigateTo('/');
    }

  return (
    <Container>
        <div className='page-heading-text mt-6'>
            <Title titleText="Welcome back!" />
            <Subtitle subtitleText="Sign in to continue your journey" />
        </div>
        <form className="sign-in-form">
				<div className="box sign-in-content">
					<div className='flex flex-col'>
                        <label
                            htmlFor="email"
                            className="sign-in-input-label"
                        >
                            Enter Your Email ID
                        </label>
                        <input
                            type="email"
                            className="sign-in-email-input"
                            placeholder="Enter Your Email"
                            id="email"
                            required
                        />
                    </div>
					<div className='flex flex-col'>
                        <label
                            htmlFor="password"
                            className="sign-in-input-label"
                        >
                            Enter Your Password
                        </label>
                        <div className="sign-in-password-input-container">
                            <input
                                type="password"
                                className="sign-in-password-input"
                                placeholder="Enter Your Password"
                                id="password"
                                required
                            />
                        </div>
                    </div>

					<div
						href="/auth/forgot-password"
						className="sign-in-forgot-password"
					>
						Forgot Password
					</div>
					<p className="mt-3 body flex gap-2">
						Don&apos;t have an account?{" "}
						<a className="text-accent" href="/auth/sign-up">
							Signup
						</a>
					</p>
					<div className="mt-8 flex justify-center">
						<Button label="Sign In" isToggle onClick={handleLogin} />
					</div>
				</div>
			</form>
    </Container>
  )
}

export default SignInPage