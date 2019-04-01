import React from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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
];

function UserThemeSettingsForm(props) {
  const globalStyles = props.styles.data;

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
                  />
                  <label className="label" htmlFor={theme.machineName}>{theme.name}</label>
                </div>
              </div>
            );
          })
        }
        <div className={globalStyles['col-sm-2']}>
          <div className={globalStyles.radio}>
            <input
              type="radio"
              name="themes"
              value="custom"
              id="custom"
            />
            <label className="label" htmlFor="custom">Custom</label>
          </div>
        </div>
      </div>
      <label className="label" htmlFor="colors">Colors</label>
      <div className={`${globalStyles.input} ${globalStyles['input-fullWidth']}`}>
        <input id="colors" placeholder="Input" type="text"/>
      </div>
    </form>
  );
}

UserThemeSettingsForm.propTypes = {
  styles: PropTypes.object,
};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(UserThemeSettingsForm);
