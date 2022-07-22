import { useState,useEffect } from "react";
import './App.css';

function App() {
  const initialValues = {  TemplateID: "", TemplateName: "",Message:"",MessageType:"",MessageFormat:"",MessageHeaderFormat:"",BatchNo:"",NetworkMessage:""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    console.log(formValues);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(formValues);
        window.location.reload()
        alert("Form Submitted Sucessfully");      
    }
  }, [formErrors,formValues,isSubmit]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9]+$/i;
    
    if (!values.TemplateID) {
      errors.TemplateID = "**Template ID is required to fill";
    } else if (values.TemplateID.length < 5) {
      errors.TemplateID = "**Template ID must contain 5 to 10 characters";
    } else if (values.TemplateID.length >10) {
      errors.TemplateID = "**Template ID must contain 5 to 10 characters";
    } else if (!regex.test(values.TemplateID)) {
      errors.TemplateID = "**Input Type must be Alpha-Numeric";
    }
  
    if (!values.TemplateName) {
      errors.TemplateName = "**Template Name is required to fill";
    } else if (values.TemplateName.length < 10) {
      errors.TemplateName = "**Template Name must contain 10 to 20 characters";
    } else if (values.TemplateName.length >20) {
      errors.TemplateName = "**Template Name must contain 10 to 20 characters";
    } else if (!regex.test(values.TemplateName)) {
      errors.TemplateName = "**Input Type must be Alpha-Numeric";
    }

    if (!values.Message) {
      errors.Message = "**Message is required to fill";
    } else if (values.Message.length < 10) {
      errors.Message = "**Message must contain 10 to 20 characters";
    } else if (values.Message.length >20) {
      errors.Message = "**Message must contain 10 to 20 characters";
    } else if (!regex.test(values.Message)) {
      errors.Message = "**Input Type must be Alpha-Numeric";
    }

    if (values.MessageType === "") {
      errors.MessageType = "**Select a Message Type";}

    if (values.MessageFormat === "") {
      errors.MessageFormat = "**select the Message Format";}

    if (values.MessageHeaderFormat === "") {
      errors.MessageHeaderFormat = "**select the Message Header Format";}
          
    return errors;
  };

  return (
    <div className="App">
      <div className="container">
      

      <form onSubmit={handleSubmit}>
        <h1> Form Validation</h1>
        
      
        <div className="ui form">
          
          
          <div className="field">
            <label>Template ID:</label>
            <input
              type="Alpha Numeric"
              name="TemplateID"
              placeholder="Enter your Template ID"
              value={formValues.TemplateID}
              onChange={handleChange}
              // pattern="[a-zA-Z0-9]+"
              maxLength="10"
              id="TempIDInput"
            />
          </div>
          <p>{formErrors.TemplateID}</p>
          
          <div className="field">
            <label>Template Name:</label>
            <input
              type="Alpha Numeric"
              name="TemplateName"
              placeholder="Enter your Template Name"
              value={formValues.TemplateName}
              onChange={handleChange}
              // pattern="[a-zA-Z0-9]+"
              maxLength="20"
              id="TempNameInput"
            />
          </div>
          <p>{formErrors.TemplateName}</p>
          
          <div className="field">
            <label>Message:</label>
            <input
              type="Alpha Numeric"
              name="Message"
              placeholder="Enter your Message"
              value={formValues.Message}
              onChange={handleChange}
              // pattern="[a-zA-Z0-9]+"
              maxLength="20"
              id="Message"
            />
          </div>
          <p>{formErrors.Message}</p>
          
          <div className="field">
            <label>Message Type:</label>
            <select name="MessageType"  value={formValues.MessageType} onChange={handleChange} id="MsgTypeSelect">
                    <option value="">Select</option>
                    <option value="0100">0100</option>
                    <option value="0200">0200</option>
                    <option value="0400">0400</option>
                    <option value="0500">0500</option>
                    <option value="0800">0800</option>
            </select>
          </div>
          <p>{formErrors.MessageType}</p>

          <div>
            {formValues.MessageType === '0100' ?
              
             <div>
                <label>Message Format:</label>
                <select name="MessageFormat" value={formValues.MessageFormat} onChange={handleChange} id="MsgFormatInput">
                    <option value="">Select</option>
                    <option value="JSON" >JSON</option>
                    <option value="ISO">ISO</option>   
                </select>
                <p>{formErrors.MessageFormat}</p>
                
                
                <label>Message Header Format:</label>
                <select name="MessageHeaderFormat" value={formValues.MessageHeaderFormat}  onChange={handleChange} >
                    <option value="">Select</option>
                    <option value="OBN">0BN</option>
                    <option value="2BN">2BN</option>
                    
                </select>
                <p>{formErrors.MessageHeaderFormat}</p>

                <label className="MsgFieldsLabel">Message Fields:</label>
                <select name="MessageFields"   onChange={handleChange} required multiple id="MsgFieldsSelect">
                    <option value="1" >1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7" >7</option>
                    <option value="8">8</option>
                    <option value="9" >9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                </select>
                <p id="note">Hold down the Ctrl(windows)/Command(Mac) button to select multiple options.</p>
                <p>{formErrors.MessageFields}</p>
              
              
              </div>
        
              
              :''
            }
          </div>
          <div>
            {formValues.MessageType === '0200' ?
              
             <div>
                <label>Message Format:</label>
                <select name="MessageFormat" value={formValues.MessageFormat} onChange={handleChange} id="MsgFormatInput">
                    <option value="">Select</option>
                    <option value="JSON" >JSON</option>
                    <option value="ISO">ISO</option>   
                </select>
                <p>{formErrors.MessageFormat}</p>
                
                
                <label>Message Header Format:</label>
                <select name="MessageHeaderFormat" value={formValues.MessageHeaderFormat}  onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="OBN">0BN</option>
                    <option value="2BN">2BN</option>
                    
                </select>
                <p>{formErrors.MessageHeaderFormat}</p>

                 <label>Message Fields:</label>
                <select name="MessageFields"  onChange={handleChange} required multiple id="MsgFieldsSelect">
                    <option value="1" >1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7" >7</option>
                    <option value="8">8</option>
                    <option value="9" >9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                </select>
                <p id="note">Hold down the Ctrl(windows)/Command(Mac) button to select multiple options.</p>

                 <label>Is Deline:</label>
                 
                 <input type='radio' name='isDeline' value='yes' required id="delineInput"/>Yes
                 <input type='radio' name='isDeline' value='no' required/>no
                
              
              </div>
        
              
              :''
            }
          </div>
          <div>
            {formValues.MessageType === '0400' ?
              
             <div>
                <label>Message Format:</label>
                <select name="MessageFormat" value={formValues.MessageFormat} onChange={handleChange} id="MsgFormatInput">
                    <option value="">Select</option>
                    <option value="JSON" >JSON</option>
                    <option value="ISO">ISO</option>   
                </select>
                <p>{formErrors.MessageFormat}</p>
                
                
                <label>Message Header Format:</label>
                <select name="MessageHeaderFormat" value={formValues.MessageHeaderFormat}  onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="OBN">0BN</option>
                    <option value="2BN">2BN</option>
                    
                </select>
                <p>{formErrors.MessageHeaderFormat}</p>

                 <label>Message Fields:</label>
                <select name="MessageFields"  onChange={handleChange} required multiple id="MsgFieldsSelect">
                    <option value="1" >1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7" >7</option>
                    <option value="8">8</option>
                    <option value="9" >9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                </select>
                <p id="note">Hold down the Ctrl(windows)/Command(Mac) button to select multiple options.</p>

                <label>orgShould Present:</label>
                 <input type='radio' name='orgShouldPresent' value='yes' required id="orgInput"/>Yes
                 <input type='radio' name='orgShouldPresent' value='no' required/>no
              
              
              </div>
        
              
              :''
            }
          </div>
          <div>
            {formValues.MessageType === '0500' ?
              
             <div>
               <label>Message Format:</label>
                <select name="MessageFormat" value={formValues.MessageFormat} onChange={handleChange} id="MsgFormatInput">
                    <option value="">Select</option>
                    <option value="JSON" >JSON</option>
                    <option value="ISO">ISO</option>   
                </select>
                <p>{formErrors.MessageFormat}</p>
                
                
                <label>Message Header Format:</label>
                <select name="MessageHeaderFormat" value={formValues.MessageHeaderFormat}  onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="OBN">0BN</option>
                    <option value="2BN">2BN</option>
                    
                </select>
                <p>{formErrors.MessageHeaderFormat}</p>

                 <label>Message Fields:</label>
                <select name="MessageFields"  onChange={handleChange} required multiple id="MsgFieldsSelect">
                    <option value="1" >1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7" >7</option>
                    <option value="8">8</option>
                    <option value="9" >9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                </select>
                <p id="note">Hold down the Ctrl(windows)/Command(Mac) button to select multiple options.</p>

                 <label>Batch No:</label>
                <input
                type="Number"
                name="BatchNo"
                placeholder="Enter your Batch No"
                onChange={handleChange}
                min="3"
                max="5"
                required
                id="batchInput"
                 />
               
              
              </div>
        
              
              :''
            }
          </div>
          <div>
            {formValues.MessageType === '0800' ?
              
             <div>
                <label>Message Format:</label>
                <select name="MessageFormat" value={formValues.MessageFormat} onChange={handleChange} id="MsgFormatInput">
                    <option value="">Select</option>
                    <option value="JSON" >JSON</option>
                    <option value="ISO">ISO</option>   
                </select>
                <p>{formErrors.MessageFormat}</p>
                
                
                <label>Message Header Format:</label>
                <select name="MessageHeaderFormat" value={formValues.MessageHeaderFormat}  onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="OBN">0BN</option>
                    <option value="2BN">2BN</option>
                    
                </select>
                <p>{formErrors.MessageHeaderFormat}</p>

                <label>Message Fields:</label>
                <select name="MessageFields"  onChange={handleChange} required multiple id="MsgFieldsSelect">
                    <option value="1" >1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7" >7</option>
                    <option value="8">8</option>
                    <option value="9" >9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                </select>
                <p id="note">(Hold down the Ctrl(windows)/Command(Mac) button to select multiple options.)</p>

                <label>Network Message Format:</label>
                <input 
                type="text"
                name="NetworkMessage"
                placeholder="Enter your Network Message"
                onChange={handleChange}
                required
                id="NetworkInput"
                />
                
              </div>
        
              
              :''
            }
          </div>
            </div>
          
          <button >Submit</button>
        
        
          
      </form>
    </div>
    </div>
  );
}

export default App;
