import React, { Component } from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { updateUserById } from '../../../store/actions/UserActions';
import { FormattedMessage } from 'react-intl';
import { getUserPreferenceStyles } from '../../../store/actions/globalStylesActions';

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
    machineName: 'javascript',
    name: 'JavaScript',
    colors: '#F0DB4F,#F0DB4F,#323330,#FFFFFF,#e6cd2c,#323330,#323330,#323330',
  },
  {
    machineName: 'custom',
    name: 'Custom',
    colors: '#0074B2,#0083CA,#00A2FF,#FFFFFF,#00A5FF,#FFFFFF,#03EEFF,#00CCC2',
  },
];

class UserThemeSettingsForm extends Component {
  handleClick = (theme, user) => {
    const u = user;

    if (!user.preferences) {
      u.preferences = {};
    }

    const themeUpdate = theme;

    if (theme.machineName === 'custom') {
      themeUpdate.colors = this.refs.colors.value;
    }
    u.preferences.themeSettings = themeUpdate;
    this.props.dispatch(updateUserById(u._id, u));
    this.props.dispatch(getUserPreferenceStyles(this.props.user));
  };

  handleChange = (event) => {
    const u = this.props.user;

    if (!u.preferences) {
      u.preferences = {};
    }

    const themeUpdate = u.preferences.themeSettings;
    themeUpdate.colors = event.target.value;
    u.preferences.themeSettings = themeUpdate;
    this.props.dispatch(updateUserById(u._id, u));
    this.props.dispatch(getUserPreferenceStyles(this.props.user));
  };

  render() {
    const globalStyles = this.props.styles.data;
    const user = this.props.user;
    const preferences = user.preferences || {};
    const themeSettings = preferences.themeSettings || {};

    let selectedTheme = {};
    if (this.refs.themes) {
      selectedTheme = themes.find((theme => {
        if (this.refs.themes.value === theme.machineName) {
          return theme;
        }
        return themeSettings;
      }));
    }

    if (this.props.user.data) {
      return <div>Loading...</div>;
    }

    return (
      <form>
        <h3><FormattedMessage id="themeSettings" /></h3>
        <div className={globalStyles.row}>
          {
            themes.map((theme, key) => {
              const isChecked = theme.machineName === themeSettings.machineName;

              return (
                <div
                  key={key}
                  className={globalStyles['col-sm-2']}
                >
                  <div className={globalStyles.radio}>
                    <input
                      type="radio"
                      name="themes"
                      ref="themes"
                      value={theme.machineName}
                      id={theme.machineName}
                      onClick={() => this.handleClick(theme, this.props.user)}
                      defaultChecked={isChecked}
                    />
                    <label className="label" htmlFor={theme.machineName}>{theme.name}</label>
                  </div>
                </div>
              );
            })
          }
        </div>
        <label className="label" htmlFor="colors">
          <FormattedMessage id="colors" />
        </label>
        <div className={`${globalStyles.input} ${globalStyles['input-fullWidth']}`}>
          <input
            type="text"
            id="colors"
            placeholder="Input"
            defaultValue={selectedTheme.colors}
            onChange={(event) => this.handleChange(event)}
            ref="colors"
          />
        </div>
      </form>
    );
  }
}

UserThemeSettingsForm.propTypes = {
  dispatch: PropTypes.func,
  styles: PropTypes.object,
  user: PropTypes.object,
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
