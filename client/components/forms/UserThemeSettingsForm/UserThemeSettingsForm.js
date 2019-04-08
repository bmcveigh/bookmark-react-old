import React, { Component } from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { updateUserById } from '../../../store/actions/UserActions';
import { FormattedMessage } from 'react-intl';
import { getUserPreferenceStyles } from '../../../store/actions/globalStylesActions';

const themes = [
  {
    machineName: '360channel',
    name: '360 Channel',
    colors: '#323232,#E60A00,#E60A00,#FFFFFF,#505050,#F5F5F5,#E64600,#E60A00',
  },
  {
    machineName: 'ancestry',
    name: 'Ancestry',
    colors: '#534d46,#706b63,#7a9c0f,#FFFFFF,#648200,#FFFFFF,#9cbe30,#f3b670',
  },
  {
    machineName: 'Autumn',
    name: 'Autumn',
    colors: '#194234,#9c2e33,#E7C12e,#194234,#9c2e33,#FFFFFF,#ee6030,#9C2E33',
  },
  {
    machineName: 'Atom One Dark',
    name: 'Atom One Dark',
    colors: '#121417,#2F343D,#2F343D,#ABB2BF,#2F343D,#ABB2BF,#98C379,#98C379',
  },
  {
    machineName: 'github',
    name: 'GitHub',
    colors: '#ffffff,#24292e,#e9f0f7,#1d4880,#ffefc6,#666666,#28a745,#92979b',
  },
  {
    machineName: 'halloween',
    name: 'Halloween',
    colors: '#ff8800,#000000,#ffffff,#000000,#4a5664,#000000,#000000,#736e65',
  },
  {
    machineName: 'kill_bill',
    name: 'Kill Bill',
    colors: '#FDE13A,#FDE13A,#000000,#E72D25,#FFF09E,#000000,#E72D25,#E72D25',
  },
  {
    machineName: 'retro_monochrome_terminal',
    name: 'Retro Monochrome Terminal',
    colors: '#000000,#000000,#006600,#00ff00,#00ff00,#00ff00,#ff0000,#ff0000',
  },
  {
    machineName: 'javascript',
    name: 'JavaScript',
    colors: '#F0DB4F,#F0DB4F,#323330,#FFFFFF,#e6cd2c,#323330,#323330,#323330',
  },
  {
    machineName: 'Linux Mint Y Dark',
    name: 'Linux Mint Y Dark',
    colors: '#353535,#2f2f2f,#8fa876,#ffffff,#8fa876,#ffffff,#818181,#8fa876',
  },
  {
    machineName: 'Monokai',
    name: 'Monokai',
    colors: '#222222,#2F2F2F,#F92772,#FFFFFF,#A6E22D,#FFFFFF,#66D9EF,#BE84F2',
  },
  {
    machineName: 'osticket',
    name: 'OSTicket',
    colors: '#F68D29,#F99A3F,#F99A3F,#FFFFFF,#ED8624,#FFFFFF,#FFFFFF,#F9A55A',
  },
  {
    machineName: 'playstation',
    name: 'PlayStation',
    colors: '#173f85,#0072CE,#0072ce,#FFFFFF,#0072CE,#FFFFFF,#FFDA00,#FFDA00',
  },
  {
    machineName: 'saiku_analytics',
    name: 'Saiku Analytics',
    colors: '#AE1817,#AE1817,#232323,#FFFFFF,#999999,#FFFFFF,#333333,#232323',
  },
  {
    machineName: 'spotify',
    name: 'Spotify',
    colors: '#1A1919,#1A1919,#EDEBE6,#7DBA4A,#4F4D4D,#FFFFFF,#7DBA4A,#7DBA4A',
  },
  {
    machineName: 'starbucks',
    name: 'Starbucks',
    colors: '#0A6242,#0A6242,#3D3935,#BC7E3B,#BC7E3B,#F7F7F7,#3D3935,#3D3935',
  },
  {
    machineName: 'trulia',
    name: 'Trulia',
    colors: '#37B449,#2D9A48,#1B5E48,#FFFFFF,#2D9A48,#FFFFFF,#1B5E48,#EB4D5C',
  },
  {
    machineName: 'waze',
    name: 'Waze',
    colors: '#93C4D3,#FFFFFF,#93C4D3,#FFFFFF,#FFFFFF,#173C4C,#66CC33,#173C4C',
  },
  {
    machineName: 'zillow',
    name: 'Zillow',
    colors: '#235ce2,#6BB700,#6BB700,#FFFFFF,#262626,#FFFFFF,#6BB700,#EB4D5C',
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
