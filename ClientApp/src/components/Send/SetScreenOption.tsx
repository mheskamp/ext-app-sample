import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../store';
import { actionCreators } from '../../store/ReceivedMessages';

const SetScreenOption: React.FC = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: ApplicationState) => {
    return state.setScreenOption;
  });
  const textRef = React.createRef<HTMLInputElement>();
  const valueToSend = () => (textRef && textRef.current) ? textRef.current.value : ""
  const createMessage = () => {
    return {
      action: "setScreenOption",
      screenOptionId: state.screenOptionId,
      value: valueToSend()
    }

  };
  const sendMessage = () => {
    dispatch(actionCreators.sendMessage(createMessage()));
  }

  return (
    <div>
      <h1>Message: <code>setScreenOption</code></h1>
      Received a message with the following screen id:
      <pre><code>{state.screenOptionId}</code></pre>
      When you send the message it will take the value in the text box and set the value of the screen option using a message like this:
      <br></br>
      <pre><code>{"{\n \"action\": \"setScreenOption\",\n \"screenOptionId\": \"<screen option id>\",\n \"value\": \"<value from text box>\"\n}"}</code></pre>
      <div className="input-group mb-3">
        <input ref={textRef} type="text" className="form-control" placeholder="Value to send to screen option" aria-label="Value to send" aria-describedby="button-addon2" />
        <div className="input-group-append">
          <button onClick={sendMessage} className="btn btn-outline-primary" type="button" id="button-addon2">Send Message</button>
        </div>
      </div>
    </div>
  );
}

export default SetScreenOption;
