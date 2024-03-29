export const validEmail = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$");

export const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");

export const validCpf = new RegExp("^([0-9]{3}\.){2}[0-9]{3}-[0-9]{2}$");
                                      //("^([0-9]{3}\.){2}[0-9]{3}-[0-9]{2}$")
                                      ///^\d{3}\.\d{3}\.\d{3}\-\d{2}$/