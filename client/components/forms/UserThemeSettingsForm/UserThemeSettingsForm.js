import React, { Component } from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { updateUserById } from '../../../store/actions/UserActions';
import { FormattedMessage } from 'react-intl';
import { getUserPreferenceStyles } from '../../../store/actions/globalStylesActions';
import ThemeIcon from '../../elements/ThemeIcon/ThemeIcon';

import classes from './UserThemeSettingsForm.css';

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
    machineName: 'codeMash',
    name: 'Code Mash',
    colors: '#0c84a9,#f67f01,#94C53C,#FFFFFF,#16A1C8,#FFFFFF,#FFFFFF,#94C53C',
  },
  {
    machineName: 'emberjs',
    name: 'Ember.js',
    colors: '#faf4f1,#faf4f1,#E77562,#ffffff,#E5DBD6,#717171,#E46651,#E46651',
  },
  {
    machineName: 'Facebook',
    name: 'Facebook',
    colors: '#4E69A2,#38528B,#38528B,#FFFFFF,#38528B,#FFFFFF,#1FAD38,#CD2323',
  },
  {
    machineName: 'github',
    name: 'GitHub',
    colors: '#ffffff,#24292e,#e9f0f7,#1d4880,#ffefc6,#666666,#28a745,#92979b',
  },
  {
    machineName: 'gotham',
    name: 'Gotham',
    colors: '#0A0F14,#10151B,#265360,#D4EBE9,#D26939,#9BD1CE,#EDB54B,#C33027',
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
    machineName: 'macOS',
    name: 'macOS',
    colors: '#F1F3F5,#DAD8DA,#D3DFE3,#303030,#C2E2ED,#303030,#1682FB,#34C749',
  },
  {
    machineName: 'mint',
    name: 'Mint',
    colors: '#212420,#333632,#87CF3E,#FFFFFF,#393d39,#FFFFFF,#87CF3E,#68a030',
  },
  {
    machineName: 'python',
    name: 'Python',
    colors: '#306998,#FFD43B,#FFD43B,#7F7F7F,#5A9FD4,#F4F4F4,#FFE873,#FFD43B',
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
    machineName: 'n64',
    name: 'N64',
    colors: '#319b44,#0047b3,#db3236,#ffff00,#0047B3,#FFFFFF,#FFFF00,#db3236',
  },
  {
    machineName: 'netflix',
    name: 'Netflix',
    colors: '#1F1C18,#8E0E00,#8E0E00,#FFFFFF,#A1A09F,#FFFFFF,#B01D0C,#8E0E00',
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
    machineName: 'php',
    name: 'PHP',
    colors: '#8892BF,#4F5B93,#4F5B93,#FFFFFF,#CBCCD4,#FFFFFF,#4F5B93,#F15340',
  },
  {
    machineName: 'root_beer',
    name: 'Root Beer',
    colors: '#471B12,#FF2501,#FF2501,#FFFFFF,#C1836E,#FFFFFA,#54E258,#FF2501',
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
    machineName: 'Slack',
    name: 'Slack.com',
    colors: '#573D82,#453068,#3FBA91,#FFFFFF,#453068,#FFFFFF,#3FBA91,#FF3E88',
  },
  {
    machineName: 'starbucks',
    name: 'Starbucks',
    colors: '#0A6242,#0A6242,#3D3935,#BC7E3B,#BC7E3B,#F7F7F7,#3D3935,#3D3935',
  },
  {
    machineName: 'symfony',
    name: 'Symfony',
    colors: '#000000,#000000,#7aba20,#FFFFFF,#000000,#FFFFFF,#7aba20,#0088cc',
  },
  {
    machineName: 'trello',
    name: 'Trello',
    colors: '#0079BF,#026AA7,#5BA4CF,#FFFFFF,#026AA7,#FFFFFF,#61BD4F,#EB5A46',
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
    machineName: 'we_are_la_tech',
    name: 'WeAreLATech',
    colors: '#2b2b2b,#f02109,#f9fc00,#2b2b2b,#2b2b2b,#FFFFFF,#66ed00,#ec34ff',
  },
  {
    machineName: 'windowsXP',
    name: 'Windows XP',
    colors: '#F0EDE0,#0054E3,#0054E3,#FFFFFF,#0054E3,#000000,#ED6D3A,#ED6D3A',
  },
  {
    machineName: 'yeoman',
    name: 'Yeoman',
    colors: '#5AADBB,#076570,#F5D087,#FFFFFF,#D37C71,#262222,#DD002A,#F15340',
  },
  {
    machineName: 'youtube',
    name: 'YouTube',
    colors: '#FFFFFF,#CC181E,#CC181E,#FFFFFF,#444444,#0D0D0D,#CC181E,#E04A4D',
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
        <div className="row">
          {
            themes.map((theme, key) => {
              const isChecked = theme.machineName === themeSettings.machineName;

              return (
                <div
                  key={key}
                  className={`col-md-1 ${classes.ThemeChoiceWrapper}`}
                >
                  <div>
                    <ThemeIcon theme={theme} />
                  </div>
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
