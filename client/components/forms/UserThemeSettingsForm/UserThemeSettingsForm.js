import React from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { updateUserById } from '../../../store/actions/UserActions';

const themes = [
  {
    machineName: 'light',
    name: 'Light',
    colors: '#0074B2,#0083CA,#00A2FF,#FFFFFF,#00A5FF,#FFFFFF,#03EEFF,#00CCC2',
  },
  {
    machineName: 'dark',
    name: 'Dark',
    colors: '#0074B2,#0083CA,#00A2FF,#FFFFFF,#00A5FF,#FFFFFF,#03EEFF,#00CCC2',
  },
  {
    machineName: 'custom',
    name: 'Custom',
    colors: '#0074B2,#0083CA,#00A2FF,#FFFFFF,#00A5FF,#FFFFFF,#03EEFF,#00CCC2',
  },
];

const handleClick = (theme, user, dispatch) => {
  const u = user;

  if (!user.preferences) {
    u.preferences = {};
  }

  u.preferences.themeSettings = theme;
  dispatch(updateUserById(u._id, u));
};

function UserThemeSettingsForm(props) {
  const globalStyles = props.styles.data;
  const user = props.user;
  const preferences = user.preferences || {};
  const themeSettings = preferences.themeSettings || {};

  if (props.user.data) {
    return <div>Loading...</div>;
  }

  return (
    <form>
      <h3>Theme Settings</h3>
      <div className={globalStyles.row}>
        {
          themes.map((theme, key) => {
            return (
              <div
                key={key}
                className={globalStyles['col-sm-2']}
              >
                <div className={globalStyles.radio}>
                  <input
                    type="radio"
                    name="themes"
                    value={theme.machineName}
                    id={theme.machineName}
                    onClick={() => handleClick(theme, props.user, props.dispatch)}
                    defaultChecked={theme.machineName === themeSettings.machineName}
                  />
                  <label className="label" htmlFor={theme.machineName}>{theme.name}</label>
                </div>
              </div>
            );
          })
        }
      </div>
      <label className="label" htmlFor="colors">Colors</label>
      <div className={`${globalStyles.input} ${globalStyles['input-fullWidth']}`}>
        <input
          type="text"
          id="colors"
          placeholder="Input"
          defaultValue={themeSettings.colors}
        />
      </div>
    </form>
  );
}

UserThemeSettingsForm.propTypes = {
  dispatch: PropTypes.func,
  styles: PropTypes.object,
};

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    updateUserById,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserThemeSettingsForm);
