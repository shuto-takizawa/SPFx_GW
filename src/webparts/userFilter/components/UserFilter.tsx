import * as React from 'react';
import styles from './UserFilter.module.scss';
import { IUserFilterProps } from './IUserFilterProps';
import { escape } from '@microsoft/sp-lodash-subset';

interface IUserFilterState {
    select: string;
}

export default class UserFilter extends React.Component<IUserFilterProps, IUserFilterState, {}> {

    constructor (props: IUserFilterProps) {
        super(props)

        this.state = {
            select: '0'
        }
        this.changeSelect = this.changeSelect.bind(this)
    }

    private changeSelect (e: any) : void {
        console.log(e.target.value)
        this.setState({
            select: e.target.value
        })
    }

  public render(): React.ReactElement<IUserFilterProps> {
    return (
      <div className={ styles.userFilter }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>User Filter Test!</span><br/>
              <select name='user' value={this.state.select} onChange={this.changeSelect}>
                <option value='0'>ユーザー１</option>
                <option value='1'>ユーザー２</option>
                <option value='2'>ユーザー３</option>
              </select>
              <p>{this.props.data[this.state.select].name}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
