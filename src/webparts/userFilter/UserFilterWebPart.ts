import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'UserFilterWebPartStrings';
import UserFilter from './components/UserFilter';
import { IUserFilterProps } from './components/IUserFilterProps';

export interface IUserFilterWebPartProps {
  description: string;
}

export default class UserFilterWebPart extends BaseClientSideWebPart<IUserFilterWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IUserFilterProps> = React.createElement(
      UserFilter,
      {
        description: this.properties.description,
        data: [
            {
                id: 1,
                name: 'User1',
            },
            {
                id: 2,
                name: 'User2',
            },
            {
                id: 3,
                name: 'User3',
            },
        ]
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
