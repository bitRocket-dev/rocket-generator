/** @format */

import { FC, useCallback, useEffect, useRef } from 'react';
import { ConversationalForm } from 'conversational-form';
import form from './config/form.json';

export const Conversational: FC = (): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);

  const onSubmit = (data: any) => console.log(data);

  const initConversationalForm = useCallback(() => {
    const CF = ConversationalForm.startTheConversation({
      options: {
        submitCallback: () => {
          onSubmit(CF.getFormData(true));
          CF.addRobotChatResponse('Hai completato il form!');
        },
        preventAutoFocus: true,
      },
      tags: form.stepList,
    });
    if (ref && ref.current) ref.current.appendChild(CF.el);
  }, []);

  useEffect(() => initConversationalForm(), [initConversationalForm]);

  return <div ref={ref} style={{ paddingTop: '4rem' }}></div>;
};
