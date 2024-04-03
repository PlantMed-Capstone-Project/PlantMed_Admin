import LockRoundedIcon from '@mui/icons-material/LockRounded'
import PersonIcon from '@mui/icons-material/Person'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { IconButton } from '@mui/material'
import { ACCESS_TOKEN } from 'constant'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login } from 'rest/api/auth'
import { createCookie } from 'utils/cookie'
import InputField from 'views/login/components/InputField'
import { validateInputs } from 'views/login/components/InputField/validationRules'
import * as styleMui from './LoginForm.styled'

export default function LoginForm() {
    const navigate = useNavigate()
    //Chuyển trạng thái nhìn thấy mật khẩu
    const [eye, setEye] = useState(false)
    const handleEye = () => {
        setEye((prevState) => !prevState)
    }

    const [errors, setErrors] = useState({})

    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    })

    const inputFields = [
        {
            key: 'email',
            placeholder: 'Email',
            type: 'email',
            icon: <PersonIcon sx={styleMui.iconStyle} />,
        },
        {
            key: 'password',
            placeholder: 'Password',
            type: eye ? 'text' : 'password',
            icon: <LockRoundedIcon sx={styleMui.iconStyle} />,
            eyeIcon: (
                <IconButton onClick={handleEye} tabIndex={-1}>
                    {eye ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
            ),
        },
    ]

    //Khai báo input
    const renderInputs = () => {
        return inputFields.map((item, idx) => (
            <InputField
                key={idx}
                type={item.type}
                icon={item.icon}
                eyeIcon={item.eyeIcon}
                handleEye={handleEye}
                placeholder={item.placeholder}
                value={inputs[item.key]}
                error={errors[item.key]}
                onChange={(e) => handleInputChange(item.key, e.target.value)}
                onKeyDown={handleKeyDown}
                helperText={errors[item.key]}
            />
        ))
    }

    //Check validation
    const onValidate = () => {
        const inputErrors = validateInputs(inputs)

        if (Object.keys(inputErrors).length > 0) {
            setErrors(inputErrors)
        } else {
            setErrors({})
            onSubmit()
        }
    }

    //Nhấn Enter để validate
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            onValidate()
        }
    }

    const handleInputChange = (key, value) => {
        setInputs((prevInputs) => ({ ...prevInputs, [key]: value }))
    }

    const clearInput = () => {
        setInputs({
            email: '',
            password: '',
        })
    }

    const onSubmit = async () => {
        try {
            const res = await login(inputs)
            const { accessToken } = res.data
            createCookie(ACCESS_TOKEN, accessToken)
            clearInput()
            toast.success('Login successfully!')
            navigate('/')
        } catch (e) {
            console.log(e)
            toast.error(e.response.data.message, { position: 'top-right' })
        }
    }

    return (
        <styleMui.Form>
            <styleMui.Logo />
            <styleMui.signinTitle>Welcome Back!</styleMui.signinTitle>
            <styleMui.containerInput>
                {/* Start input place */}
                <styleMui.inputPlace>{renderInputs()}</styleMui.inputPlace>
                {/* End input place */}
            </styleMui.containerInput>
            <styleMui.navPlace>
                <styleMui.button
                    variant="contained"
                    onClick={() => onValidate()}
                >
                    Sign in
                </styleMui.button>
            </styleMui.navPlace>
        </styleMui.Form>
    )
}
