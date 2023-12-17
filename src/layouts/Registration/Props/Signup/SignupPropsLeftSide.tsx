import React from 'react'
import Title from '@/components/Registration/Title'
import LeftSideNavbar from '../../LeftSideNavbar';
import SignupPropsForm from '@/components/Forms/Registration/SignupPropsForm';

const LeftSide = () => {
  return (
    <div className='registration-left'>
            <LeftSideNavbar props={true} />
            <div className="registration-form">
              <Title text='SIGN UP PROPS' />
              <SignupPropsForm />
            </div>
    </div>
  )
}

export default LeftSide