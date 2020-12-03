import React, { Dispatch } from 'react';
import { editAuthUser } from '@store/auth';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// TODO: typescript type 정의하기
const mapStateToProps = (state: any, ownProps: any) => {
  return { authState: state };
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    editAuthUser
  }, dispatch)
}


const HomePage: React.FC = ({ authState, editAuthUser }: any) => {
  console.log('auth', authState);
  console.log('editAuthUser', editAuthUser)
  const onClick = () => {
    editAuthUser({
      id: 12,
      email: 'chage',
    })
  }
  return (
    <>
      <div>Home</div>
      <div>{ `Auth ${authState.auth.id}` }</div>
      <div>{ `Email ${authState.auth.email}` }</div>
      <button onClick={onClick}>dd</button>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
