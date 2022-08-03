---
id: python_setup
title: Python Setup
---
# How to configure a local Python environment

## Installation and Configuration
<details>
    <summary>Windows</summary>

### Install Pyenv-win
Pyenv is a tool for managing Python environments, this is useful for the occasionw here you either don't want to mess with your system python and/or you have projects that use differing Python versions.
* Download [Pyenv-win](https://github.com/pyenv-win/pyenv-win)
* Install via PowerShell following the guide in Github
### Configure your Pyenv environment
* We typically use the latest Python version here so find the latest version then install with `pyenv install 3.10.0`
* Set the latest Python to be your global version rather than the system python `pyenv global 3.10.0`
    * This will make the selected version of Python the default version when calling `python`
### Install Pipenv
[Pipenv](https://pipenv.pypa.io/en/latest/) is the python recommended tool for managing python environments and creates virtual environments, which allow you to isolate a python environment to the project you are working on.
* Install with `pip install pipenv`

</details>

<details>
    <summary>Cygwin</summary>
</details>

<details>
    <summary>Linux</summary>
</details>

## General Practices
### When starting a new python project
* Change directory to the project where you will be writing python
* Run `pipenv install`
    * This will configure a new virtual environment for your project
    * If you use VSCode:
        * VSCode will attempt to find Pipenv environments for the directory you are in and use that interpreter. If it doesnt automatically update, select the interpreter in the bottom right then press refresh in the dropdown and look for the virtualenv that matches your directory
    * Install packages with Pipenv e.g. `pipenv install boto3`
    * Commit Pipenv and Pipenv.lock files so that packages are pinned, and the next person working on the code can have some reassurance that they are working on the same environment you worked on
