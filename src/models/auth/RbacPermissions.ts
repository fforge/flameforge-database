import { RBAC_PERMISSIONS, STORE_AUTH } from '#constants'
import {Column,Entity,OneToMany} from 'typeorm'
import {RbacAccountPermissions} from './RbacAccountPermissions'
import {RbacDefaultPermissions} from './RbacDefaultPermissions'
import {RbacLinkedPermissions} from './RbacLinkedPermissions'


@Entity(RBAC_PERMISSIONS ,{ schema: STORE_AUTH } )
export  class RbacPermissions {

// @Column('int',{ primary:true,name:'id',comment:'Permission id',unsigned:true,default: () => ''0'', })
// id:number

// @Column('varchar',{ name:'name',comment:'Permission name',length:100 })
// name:string

// @OneToMany(()=>RbacAccountPermissions,rbacAccountPermissions=>rbacAccountPermissions.permission)


// rbacAccountPermissions:RbacAccountPermissions[]

// @OneToMany(()=>RbacDefaultPermissions,rbacDefaultPermissions=>rbacDefaultPermissions.permission)


// rbacDefaultPermissions:RbacDefaultPermissions[]

// @OneToMany(()=>RbacLinkedPermissions,rbacLinkedPermissions=>rbacLinkedPermissions.)


// rbacLinkedPermissions:RbacLinkedPermissions[]

// @OneToMany(()=>RbacLinkedPermissions,rbacLinkedPermissions=>rbacLinkedPermissions.linked)


// rbacLinkedPermissions2:RbacLinkedPermissions[]

}
