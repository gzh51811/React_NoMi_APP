import React from 'react';
import './user.css';
import withAxios from '../../hoc/withAxios';
import {
    Table, Input, InputNumber, Popconfirm, Form,
  } from 'antd';

const data = [];
const FormItem = Form.Item;
const EditableContext = React.createContext();

class EditableCell extends React.Component {
    getInput = () => {
        if (this.props.inputType === 'number') {
            return <InputNumber />;
        }
        return <Input />;
    };

    render() {
        const {
            editing,
            dataIndex,
            title,
            inputType,
            record,
            index,
            ...restProps
        } = this.props;
        return (
            <EditableContext.Consumer>
                {(form) => {
                    const { getFieldDecorator } = form;
                    return (
                        <td {...restProps}>
                            {editing ? (
                                <FormItem style={{ margin: 0 }}>
                                    {getFieldDecorator(dataIndex, {
                                        rules: [{
                                            required: true,
                                            message: `Please Input ${title}!`,
                                        }],
                                        initialValue: record[dataIndex],
                                    })(this.getInput())}
                                </FormItem>
                            ) : restProps.children}
                        </td>
                    );
                }}
            </EditableContext.Consumer>
        );
    }
}

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data, editingKey: '' };
        this.columns = [
            {
                title: 'name',
                dataIndex: 'name',
                width: '25%',
                editable: true,
            },
            {
                title: 'age',
                dataIndex: 'age',
                width: '15%',
                editable: true,
            },
            {
                title: 'phone',
                dataIndex: 'username',
                width: '40%',
                editable: false,
            },
            {
                title: 'operation',
                dataIndex: 'operation',
                render: (text, record) => {
                    const { editingKey } = this.state;
                    const editable = this.isEditing(record);
                    return (
                        <div>
                            {editable ? (
                                <span>
                                    <EditableContext.Consumer>
                                        {form => (
                                            <a
                                                href="javascript:;"
                                                onClick={() => this.save(form, record.key)}
                                                style={{ marginRight: 8 }}
                                            >
                                                Save
                      </a>
                                        )}
                                    </EditableContext.Consumer>
                                    <Popconfirm
                                        title="您确定要退出吗？"
                                        onConfirm={() => this.cancel(record.key)}
                                    >
                                        <a>Cancel</a>
                                    </Popconfirm>
                                </span>
                            ) : (
                                    <a disabled={editingKey !== ''} onClick={() => this.edit(record.key)}>修改</a>
                                )}
                        </div>
                    );
                },
            },
        ];
    }
    async componentWillMount(){
        let res = await this.props.axios.post("/users",{
            params:{
                code:3
            }
        });
        console.log(res.data);
        this.setState({
            data:res.data,
        })
        
    }

    isEditing = record => record.key === this.state.editingKey;

    cancel = () => {
        this.setState({ editingKey: '' });
    };

    save(form, key) {
        form.validateFields((error, row) => {
            if (error) {
                return;
            }
            const newData = [...this.state.data];
            const index = newData.findIndex(item => key === item.key);
            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, {
                    ...item,
                    ...row,
                });
                this.setState({ data: newData, editingKey: '' });
            } else {
                newData.push(row);
                this.setState({ data: newData, editingKey: '' });
            }
        });
    }

    edit(key) {
        this.setState({ editingKey: key });
    }

    render() {  
        const components = {
            body: {
                cell: EditableCell,
            },
        };

        const columns = this.columns.map((col) => {
            if (!col.editable) {
                return col;
            }
            return {
                ...col,
                onCell: record => ({
                    record,
                    inputType: col.dataIndex === 'age' ? 'number' : 'text',
                    dataIndex: col.dataIndex,
                    title: col.title,
                    editing: this.isEditing(record),
                }),
            };
        });

        return (
            <EditableContext.Provider value={this.props.form}>
                <Table
                    components={components}
                    bordered
                    dataSource={this.state.data}
                    columns={columns}
                    rowClassName="editable-row"
                    pagination={{
                        onChange: this.cancel,
                    }}
                />
            </EditableContext.Provider>
        );
    }
}

User = Form.create()(User);
User = withAxios(User);
export default User;