<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRegistrationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [

            'firstname' => 'required|min:2|max:20',
            'lastname' => 'required|min:2|max:20',
            'gender' => 'required',
            'email' => 'required|email:rfc,dns,filter|max:30|unique:App\Employee,email|unique:App\Admin,email|unique:App\User,email',
            'phone' => 'required|min:11|max:15',
            'username' => 'required|min:3|unique:App\Employee,username|unique:App\Admin,username|unique:App\User,username',
            'password' => 'required|min:4',
            'conPassword' => 'required_with:password|same:password|min:4'
        ];
    }
}
