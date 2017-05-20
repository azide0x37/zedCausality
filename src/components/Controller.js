import React, { PureComponent } from 'react';
import SingleInput from './SingleInput.js';
import TextArea from './TextArea.js';
import Select from './Select.js';

class Controller extends PureComponent {
  render() {
    return (
      <div className="container-fluid col-lg-6 col-lg-offset-3 col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3">
        <div className="well bs-component">
          <form className="form-horizontal" onSubmit={this.handleFormSubmit}>
            <fieldset>
              <legend>Fucks Wit Time (Heavy)</legend>
              <SingleInput
                inputType={'text'}
                title={'Project Name'}
                name={'project_name'}
                mandatory={true}
                controlFunc={() => console.log('test')}
                content={'test'}
                placeholder={'Project Name'} />
              <div className="alert alert-dismissible alert-info">
                <button type="button" className="close" data-dismiss="alert">&times;</button>
                <strong>INFO:</strong> Please use the OAC format for title. <a href="#" className="alert-link">Example...</a>
              </div>

              <Select
                title={'Build Template'}
                name={'buildTemplate'}
                mandatory={true}
                controlFunc={() => console.log('test')}
                options={['a', 'b', 'c', 'd']}
                selectedOption={'a'} />

              <TextArea
                title={'Project Notes'}
                rows={2}
                resize={true}
                mandatory={false}
                content={'Test Test Test Test Test Test Test '}
                name={'projectNotes'}
                controlFunc={() => console.log('test')}
                placeholder={'Place notes to save with project here.'} />


              <div className="form-group">
                <div className="btn-group btn-group-justified" role="group" aria-label="...">
                  <div className="btn-group" role="group">
                    <button type="delete" className="btn btn-danger btn-disabled">Delete</button>
                  </div>
                  <div className="btn-group" role="group">
                    <button type="reset" className="btn btn-warning">Clear</button>
                  </div>
                  <div className="btn-group" role="group">
                    <button type="submit" className="btn btn-success">Submit</button>
                  </div>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

export default Controller;
