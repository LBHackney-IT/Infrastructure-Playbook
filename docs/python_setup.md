---
id: python_setup
title: Python Setup
---
# How to configure a local Python environment

## Installation and Configuration
<details>
    <summary>Windows</summary>

### Install Pyenv-win
* Download [Pyenv-win](https://github.com/pyenv-win/pyenv-win)
* Install via PowerShell following the guide in Github
### Configure your Pyenv environment
* We typically use the latest Python version here so find the latest version then install with `pyenv install 3.10.0`
* Set the latest Python to be your global version rather than the system python `pyenv global 3.10.0`
    * This will make the selected version of Python the default version when calling `python`
### Install Pipenv
[Pipenv](https://pipenv.pypa.io/en/latest/) is the python recommended tool for managing python environments and creates virtual environments, which allow you to isolate a python environment to the project you are working on
* Install with `pip install pipenv`

</details>

<details>
    <summary>Linux</summary>
</details>
